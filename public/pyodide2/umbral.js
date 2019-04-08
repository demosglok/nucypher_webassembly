var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="umbral.data";var REMOTE_PACKAGE_BASE="umbral.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","umbral",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","umbral-0.1.3a1-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:62516,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1050,2266,3097,4092,5130,6307,7300,8443,9574,10694,11748,12878,13969,14944,16268,17152,18172,19281,20225,21277,22676,23776,24836,26165,27299,28289,29542,30657,31556,32713,33971,35233,36491,37568,38719,40186,41366,42593,43524,44402,45301,46611,47610,48845,50317,51617,52721,53814,54649,55462,56615,57913,58982,60096,61449],sizes:[1050,1216,831,995,1038,1177,993,1143,1131,1120,1054,1130,1091,975,1324,884,1020,1109,944,1052,1399,1100,1060,1329,1134,990,1253,1115,899,1157,1258,1262,1258,1077,1151,1467,1180,1227,931,878,899,1310,999,1235,1472,1300,1104,1093,835,813,1153,1298,1069,1114,1353,1067],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_umbral.data")}Module["addRunDependency"]("datafile_umbral.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/umbral/utils.py",start:0,end:1208,audio:0},{filename:"/lib/python3.7/site-packages/umbral/keys.py",start:1208,end:17996,audio:0},{filename:"/lib/python3.7/site-packages/umbral/config.py",start:17996,end:20653,audio:0},{filename:"/lib/python3.7/site-packages/umbral/__about__.py",start:20653,end:21822,audio:0},{filename:"/lib/python3.7/site-packages/umbral/point.py",start:21822,end:29247,audio:0},{filename:"/lib/python3.7/site-packages/umbral/cfrags.py",start:29247,end:39090,audio:0},{filename:"/lib/python3.7/site-packages/umbral/__init__.py",start:39090,end:39996,audio:0},{filename:"/lib/python3.7/site-packages/umbral/params.py",start:39996,end:41520,audio:0},{filename:"/lib/python3.7/site-packages/umbral/signing.py",start:41520,end:47127,audio:0},{filename:"/lib/python3.7/site-packages/umbral/pre.py",start:47127,end:65321,audio:0},{filename:"/lib/python3.7/site-packages/umbral/openssl.py",start:65321,end:72764,audio:0},{filename:"/lib/python3.7/site-packages/umbral/curve.py",start:72764,end:76754,audio:0},{filename:"/lib/python3.7/site-packages/umbral/kfrags.py",start:76754,end:84221,audio:0},{filename:"/lib/python3.7/site-packages/umbral/random_oracles.py",start:84221,end:91430,audio:0},{filename:"/lib/python3.7/site-packages/umbral/dem.py",start:91430,end:93456,audio:0},{filename:"/lib/python3.7/site-packages/umbral/curvebn.py",start:93456,end:102983,audio:0},{filename:"/lib/python3.7/site-packages/umbral-0.1.3a1-py3.7.egg-info/PKG-INFO",start:102983,end:113392,audio:0},{filename:"/lib/python3.7/site-packages/umbral-0.1.3a1-py3.7.egg-info/dependency_links.txt",start:113392,end:113393,audio:0},{filename:"/lib/python3.7/site-packages/umbral-0.1.3a1-py3.7.egg-info/requires.txt",start:113393,end:113664,audio:0},{filename:"/lib/python3.7/site-packages/umbral-0.1.3a1-py3.7.egg-info/top_level.txt",start:113664,end:113671,audio:0},{filename:"/lib/python3.7/site-packages/umbral-0.1.3a1-py3.7.egg-info/SOURCES.txt",start:113671,end:114406,audio:0}],remote_package_size:66612,package_uuid:"91f8f149-d8a4-4c99-ad13-b58589ae04e0"})})();