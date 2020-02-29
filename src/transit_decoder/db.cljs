(ns transit-decoder.db
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :transit-str
 (fn [db _]
   (:transit-str db)))

(rf/reg-sub
 :clojure-str
 (fn [db _]
   (:clojure-str db)))

(rf/reg-sub
 :transit-string-empty?
 :<- [:transit-str]
 (fn [transit-str _]
   (empty? transit-str)))

(def transit-str*
  (rf/subscribe [:transit-str]))

(def clojure-str*
  (rf/subscribe [:clojure-str]))

(def transit-string-empty?*
  (rf/subscribe [:transit-string-empty?]))
