(ns transit-decoder.text-processing
  (:require ["prismjs/components/prism-core" :refer [highlight languages]]
            ["prismjs/components/prism-clojure"]
            [clojure.pprint :refer [pprint]]
            [cognitect.transit :as transit]))

(def clojure-lang
  (.-clojure languages))

(defn read-transit [input]
  (transit/read (transit/reader :json) input))

(defn prettify-cljs-string [input]
  (-> input
      (pprint)
      (with-out-str)))

(defn highlight-input [input lang]
  (highlight input lang))

(defn prettify-and-highlight-clojure-transit [input-transit]
  (-> input-transit
      (read-transit)
      (prettify-cljs-string)
      (highlight-input clojure-lang)))
