/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){"use strict";var s=function t(s){this.element_=s,this.init()};window.MaterialSpinner=s,s.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},s.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},s.prototype.createLayer=function(s){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+s);var e=document.createElement("div");e.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),e.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var _=[e,a,i],n=0;n<_.length;n++){var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),_[n].appendChild(r)}t.appendChild(e),t.appendChild(a),t.appendChild(i),this.element_.appendChild(t)},s.prototype.createLayer=s.prototype.createLayer,s.prototype.stop=function(){this.element_.classList.remove("is-active")},s.prototype.stop=s.prototype.stop,s.prototype.start=function(){this.element_.classList.add("is-active")},s.prototype.start=s.prototype.start,s.prototype.init=function(){if(this.element_){for(var s=1;s<=this.Constant_.MDL_SPINNER_LAYER_COUNT;s++)this.createLayer(s);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:s,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}();
