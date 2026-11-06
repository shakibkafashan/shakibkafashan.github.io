'use strict';
importScripts('vtm-model.js');
self.onmessage=({data})=>{const {id,offset,spread}=data;try{self.postMessage({id,offset,spread,curve:VTM.curve(offset,spread)});}catch(error){self.postMessage({id,error:error.message});}};
