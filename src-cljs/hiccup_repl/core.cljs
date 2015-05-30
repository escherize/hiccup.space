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
  (let [line-num (-> @model
                     (str/replace #"#_" "")
                     str/split-lines
                     count)]
    [:div
     [:textarea.form-control
      {:style {:font-family "monospace"
               :font-size "14px"
               :width "100%"
               :height (str (* 20 (+ 2 line-num)) "px")
               :margin-left "10px"}
       :value @model
       :on-blur #(.log js/console %)
       :on-change #(reset! model (-> % .-target .-value))}]]))

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
        [:div {:dangerously-set-inner-HTML
               {:__html @hiccup-html}}]]
       [:div.col-md-4.hidden-sm.hidden-xs
        [:div.form-group
         [:div {:style {:border "black 1px solid"
                        :font-family "monowidth"}} @hiccup-html]]]])))

(defn home-component []
  [:div
   [:div.jumbotron
    [:h1 "hiccup.space"]
    [:p "Hiccup is subset of "
     [:a {:href "http://braveclojure.com"} "Clojure"]
     " used for generating html (or "
     [:a {:href "http://reagent-project.github.io/"} "react.js components"]
     ") using "
     [:a {:href "http://braveclojure.com"} "Clojure"]
     " and "
     [:a {:href "https://www.quora.com/Why-ClojureScript"} "ClojureScript"] "."]
    [:p "Here are some examples:"]]
   [:div
    [example-component
     (pr-str [:h1 "Welcome to hiccup.space!"])]
    [example-component
     "[:h2 \"You can \"
     [:code \"edit\"]
     \"the boxes on the left.\"]"]
    [example-component
     ";;      v-- This Map --v
[:h1 {:style {:color \"#888\"}}
  \"Attributes can be added using a map for styles.\"]"]
    [example-component
     "[:h1.gray.center-text
  \"Classes can be added using a .\"]"]
    [example-component
     "[:h2#green-outline.rounded
  \"Ids can be added using a #\"]"]
    [:pre {:style {:margin-left "15px"}} "A #_ tells the reader to ignore the next expression."]
    [example-component
     "[:div
[:h4 \"Remove (\" [:code \"#_\"] \") for a surprise :)\"
#_[:img {:src \"http://media.giphy.com/media/oLJ3zbbp4lX1u/giphy.gif\"}]
]]"]
    [example-component
     ";; Table example:
[:table.table.table-hover
 [:thead
  [:tr [:td \"Programming Language\"]
       [:td \"Coolness\"]]]
 [:tbody
  [:tr [:td \"Clojure\"]       [:td \"100\"]]
  [:tr [:td \"ClojureScript\"] [:td \"100\"]]
  [:tr [:td \"Brainfuck\"]     [:td \"5\"]]]]"]
    [example-component
     "[:div
  [:input.form-control
    {:type \"text\" :placeholder \"Your name\"}]]"]
    [:a {:href "http://twitter.com/escherize"}
     [:code "by @escherize on twiter"]]]])

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
