(ns hiccup-repl.app
  (:require [hiccup-repl.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
