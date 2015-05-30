(ns hiccup-repl.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [cljs.reader :as reader]
            [crate.core :as crate]
            cljsjs.jquery
            [clojure.string :as str])
  (:import goog.History))

(defn atom-textarea [model]
  [:div
   [:textarea.form-control
    {:style {:font-family "monospace"
             :font-size "14px"

             :width "100%"
             :height "200px"
             :margin-left "10px"}
     :value @model
     :on-blur #(.log js/console %)
     :on-change #(reset! model (-> % .-target .-value))}]])

(defn safe-read [s out]
  (try (let [data (reader/read-string s)]
         (reset! out data))
       (catch :default e "never mind")))

(defn safe-parse [hiccup-data out]
  (try (let [hiccup-html (reagent/render-to-static-markup hiccup-data)]
         (reset! out hiccup-html))
       (catch :default e {:ok false :data e})))

(defn example-component [starting-string]
  (let [hic-string (atom starting-string)
        hiccup-data (atom "")
        hiccup-html (atom "")]
    (fn []
      (let [_ (safe-read @hic-string hiccup-data)
            _ (safe-parse @hiccup-data hiccup-html)])
      [:div.row
       [:div.col-xs-6.col-md-4
        [:div.form-group [atom-textarea hic-string]]]
       [:div.col-xs-6.col-md-4
        [:div.form-group [:div {:dangerously-set-inner-HTML
                                {:__html @hiccup-html}}]]]
       [:div.col-md-4.hidden-sm.hidden-xs
        [:div.form-group
         [:div {:style {:border "black 1px solid"
                        :font-family "monowidth"}} @hiccup-html]]]])))

(defn home-component []
  [:div
   [:h2 {:style {:margin-top "-60px"
                 :margin-bottom "40px"
                 :text-align :center}}
    "hiccup.space"]
   [:div
    [example-component
     "[:h1 \"Welcome to hiccup.space\"]"]
    [example-component
     "[:p \"You can \"
     [:code \"edit\"]
     \"the boxes on the left.\"]"]
    [example-component
     "[:div
[:p \"Try uncommenting the\"]
[:pre \"<----[next line]-------\"]
#_[:img {:src \"http://media.giphy.com/media/oLJ3zbbp4lX1u/giphy.gif\"}]
]"]
    [example-component
     "[:table.table.table-hover
 [:thead
  [:tr [:td \"Name\"] [:td \"Times\"]]]
 [:tbody
  [:tr [:td \"Bill\"] [:td \"50\"]]
  [:tr [:td \"Jane\"] [:td \"100\"]]]]"]

    [:a {:href "http://twitter.com/escherize"}
     [:code "by @escherize on Twiter"]]]])

(def pages
  {:home #'home-component})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))


;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn mount-components []
  (reagent/render-component [#'page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (session/put! :page :home)
  (mount-components))
