(ns transit-decoder.css-classes
  (:require [herb.core :refer [defglobal]]))

(defglobal global
  [:body :html :h3 {:margin 0
                    :padding 0}]
  [:#app {:display "flex"
          :flex-direction "column"
          :align-items "flex-start"
          :padding "24px"}])

(defn transit-input []
  {:width "100%"
   :height "250px"})

(defn clojure-output []
  {:width "100%"
   :flex-grow 1
   :overflow-y "auto"
   :border "1px solid black"})
