(ns transit-decoder.css-classes
  (:require [herb.core :refer [defglobal]]))

(defglobal global
  [:body :html :h3 :pre {:margin 0
                         :padding 0}]
  [:#app {:display "flex"
          :min-height "calc(100vh - 24px * 2)"
          :flex-direction "column"
          :align-items "flex-start"
          :background "#D8DEE9"
          :padding "24px"}])

(defn text-input []
  {:width "100%"
   :resize "none"
   :background "#ECEFF4"
   :border-radius "2px"})

(defn transit-input []
  ^{:extend text-input}
  {:height "250px"})

(defn clojure-output []
  ^{:extend text-input}
  {:flex-grow 1
   :flex-basis 0
   :overflow-y "auto"
   :max-height "100%"
   :border "1px solid black"})

(defn convert-button []
  {:margin "8px 0"
   :font-size "15px"
   :background "#81A1C1"})
