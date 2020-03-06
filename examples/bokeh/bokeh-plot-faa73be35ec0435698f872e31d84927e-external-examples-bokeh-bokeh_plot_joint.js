(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("0167981d-79ee-4b7e-a275-af94f26c5ee5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0167981d-79ee-4b7e-a275-af94f26c5ee5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8634abb9-f1f4-466a-bfe9-9e384b3f92c9":{"roots":{"references":[{"attributes":{"children":[[{"id":"56169","subtype":"Figure","type":"Plot"},0,0],[{"id":"56133","subtype":"Figure","type":"Plot"},1,0],[{"id":"56204","subtype":"Figure","type":"Plot"},1,1]]},"id":"56289","type":"GridBox"},{"attributes":{"children":[{"id":"56291","type":"ToolbarBox"},{"id":"56289","type":"GridBox"}]},"id":"56292","type":"Column"},{"attributes":{"callback":null,"data":{"c":[2,1,1,2,3,1,1,1,1,3,2,4,2,3,3,1,8,4,9,2,3,5,5,14,29,12,5,2,1,2,1,1,17,61,32,6,5,3,1,1,6,14,93,46,17,9,5,1,1,1,2,3,21,66,115,32,12,12,1,2,1,1,1,5,3,10,40,148,48,18,15,7,3,1,1,1,1,1,7,21,147,52,22,8,6,6,4,2,1,3,3,20,92,75,37,11,8,3,2,2,2,5,7,33,70,26,14,5,4,4,1,3,2,1,1,7,13,26,24,7,10,2,2,3,1,1,2,1,5,5,22,7,10,7,4,6,4,1,2,4,4,5,4,8,2,4,2,5,2,4,3,3,1,1,2,1,3,2,1,2,4,3,1,1,2,2,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1],"q":[-5,-5,-5,-4,-4,-4,-4,-3,-3,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,13,13,14,14,14,14,15,15,16,16],"r":[-3,4,5,2,3,5,7,-2,0,1,2,3,4,5,-1,0,1,2,3,4,5,-2,-1,0,1,2,3,4,6,12,-4,-3,-1,0,1,2,3,4,6,-6,-3,-2,-1,0,1,2,3,4,5,-7,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,6,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,5,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,5,10,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,5,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,-12,-8,-7,-6,-5,-4,-3,-2,1,-8,-7,-6,-5,-4,-3,-2,-1,0,-10,-9,-8,-7,-6,-4,-3,6,-8,-7,-4,-3,-2,-1,-9,-8,-7,-1,0,-7,-6,-5,-2,-2,-1,-13,-2]},"selected":{"id":"56275","type":"Selection"},"selection_policy":{"id":"56276","type":"UnionRenderers"}},"id":"56240","type":"ColumnDataSource"},{"attributes":{},"id":"56275","type":"Selection"},{"attributes":{"overlay":{"id":"56262","type":"BoxAnnotation"}},"id":"56189","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"56229","type":"HoverTool"},{"attributes":{},"id":"56188","type":"PanTool"},{"attributes":{"text":""},"id":"56257","type":"Title"},{"attributes":{"ticker":{"id":"56143","type":"BasicTicker"}},"id":"56146","type":"Grid"},{"attributes":{},"id":"56276","type":"UnionRenderers"},{"attributes":{},"id":"56228","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56273","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"56239","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":1.4},"id":"56242","type":"HexTile"},{"attributes":{"dimension":1,"ticker":{"id":"56218","type":"BasicTicker"}},"id":"56221","type":"Grid"},{"attributes":{},"id":"56190","type":"WheelZoomTool"},{"attributes":{},"id":"56283","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":1.4},"id":"56243","type":"HexTile"},{"attributes":{"source":{"id":"56251","type":"ColumnDataSource"}},"id":"56255","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56152","type":"ResetTool"},{"id":"56153","type":"PanTool"},{"id":"56154","type":"BoxZoomTool"},{"id":"56155","type":"WheelZoomTool"},{"id":"56156","type":"LassoSelectTool"},{"id":"56157","type":"UndoTool"},{"id":"56158","type":"SaveTool"},{"id":"56159","type":"HoverTool"}]},"id":"56160","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"56263","type":"PolyAnnotation"}},"id":"56191","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2.5515518153991437,"x":{"field":"x"},"y":{"field":"y"}},"id":"56253","type":"Line"},{"attributes":{},"id":"56287","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"56205","type":"DataRange1d"},{"attributes":{"formatter":{"id":"56261","type":"BasicTickFormatter"},"ticker":{"id":"56178","type":"BasicTicker"}},"id":"56177","type":"LinearAxis"},{"attributes":{},"id":"56173","type":"LinearScale"},{"attributes":{},"id":"56140","type":"LinearScale"},{"attributes":{"axis_label":"theta\\nChoate","formatter":{"id":"56272","type":"BasicTickFormatter"},"ticker":{"id":"56143","type":"BasicTicker"}},"id":"56142","type":"LinearAxis"},{"attributes":{"below":[{"id":"56142","type":"LinearAxis"}],"center":[{"id":"56146","type":"Grid"},{"id":"56151","type":"Grid"}],"left":[{"id":"56147","type":"LinearAxis"}],"output_backend":"webgl","plot_height":480,"plot_width":480,"renderers":[{"id":"56244","type":"GlyphRenderer"}],"title":{"id":"56268","type":"Title"},"toolbar":{"id":"56160","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56134","type":"DataRange1d"},"x_scale":{"id":"56138","type":"LinearScale"},"y_range":{"id":"56136","type":"DataRange1d"},"y_scale":{"id":"56140","type":"LinearScale"}},"id":"56133","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"5qSzXlFsKz/mpLNeUWwrP0mx+Qnx7yo/+dkoscL9KT8fgAFIeMgoP25RHhmrJyc/ODYPHo1xJT+CrTCBNYUjP/Kgiik4lyE/+zwU70qEHz+c9KX6GYkcP3h4h9KzPxo/WW6fxLuMGD/ZKEkqQFwYP6T/9xL5wxk/cae3kNswHD8ZsEeGuzwgP9qHK+p3JiM/L91DxjMnJz+h5oUMWjwsP/b4euZ5PjE/FN1kdvf/ND9V2isG3qY5P82YhSSpMj8/i/uUQbKjQj/U9dCMl0xGPz7n7/nTlEo/Y6avoXZRTz9o92ML5k1SPxoBA0DzO1U/3Yfs07WUWD/+KXWKBkpcPyIXgOOJMmA/OF86GAt2Yj9yCE6fB+5kP/beMaUmsWc/a7vmW1+raj8sMEF+xOxtPxbg0GUswXA/0ZYHFJ69cj/f9RRvHN90P3MKjOBGPHc/Dr6WZLLYeT8kvh17Xb18P3wpK9e67X8/xWlOWRu7gT9aVD7NDrKDP9CwBWuy2YU/R+eTAPY/iD/6VuROD+mKP1T35TNp340/UQO8tiOPkD/3KXK7nFOSP1ixj/QHQZQ/J8t3IlpYlj/LKSdZnpaYPwuwO7hW+Zo/ZsN/CWCCnT8/ewO9JxWgPw6bNjW2daE/K3QcwE3joj8+YeGQ2FakP404THjM0KU/bWSClj5Opz/Cx0ytZ8yoP+UK+ieRRqo/BpzqU0a7qz/rIZ17vSetP42D6w+tiq4/T3fLdqnhrz+3cOJihpWwP+ZOrBoLMbE/SMLgzr/DsT/BEsnTdEyyP5f5LyVJy7I/hOQJ4eE9sz8k0HxRhaOzPwPyR3pw/LM/bBx3MNZHtD/dSNWcvoO0P35VIdx5sbQ/cDkB/znQtD8fCWt9JOC0P1dCspAY4bQ/0fLkRGvStD+yf+3nOLS0P2Nb7EXRh7Q/NX1fupNLtD/VuiPApgC0P3ijqHiSp7M/miMTBK0/sz8M5WJJcMqyP/YlWmHjR7I/rbDf4YC5sT802XlhhB+xP1QK2w7Je7A/kiOn4uCdrz+W2ePipjmuP8gcsBtAzaw/29manxFcqz89FZ20K+mpP8s+ynlceqg/bFWhHaESpz/64/M9fLOlP7fbxY+6YaQ/0VrBgGAeoz+KkegUs+mhP/PH1+h0x6A/5j+AuAxnnz8UNZcNQ1+dP4icWagcdps/7NhwbJCvmT+tD7/3AQWYP/gsPuqWdpY/Po3yF8UBlT+X7Zaln6aTP1sfLNP1ZpI/6u8peQJCkT/XMC2iaTKQPy+EWhZRdo4/KkF+NzCsjD+XFvu3OBGLPwbz5yI5m4k/i3xVtkFGiD9m+Wpo4w2HPyOlrEc894U/QLTdq4DyhD9TcPuVVPyDPzbVhVAQGIM/17ZhTNk9gj8miLbV6HCBP8mQ8Z7Yq4A/pLLJKd7Yfz95NyTDdm5+P22QGXhVCH0/u9UJzmynez8hdgVH6l56P27OsXZ2Gnk/7suf9vXkdz9erSuGML52P3AXIULjonU/MZR13IiTdD+WuFHuF55zP4u1NfXwrHI/98zQMw3McT9hdNgZcvdwP2h9BtW7MXA/N4XMmefpbj8qV1WB7IZtPwhy78onM2w/UunG8CTsaj/g3RLoFrZpP1OFuhq/e2g/YA7P7edRZz9048ODVDNmP0hKNJArE2U//TBrVR38Yz/0Bz0mdOViP/S8w4Lo4WE/u87QO8vjYD8Ag1FGt9ZfP9SmIvop/F0/XJgSDBsTXD8w3AMrREhaP/WpZstShFg/sUPas5e+Vj+z6aVdlAtVP0ZV1Z3iY1M/waFyb9XQUT8R7Q/8/EBQP2q/gFt2p00/3jj+Zc4OSz/5qQ2Z649IP5sl8t5zbUY/jQBXLDqMRD9KPPkAsvxCP6kye3yrqkE/i74LzwW6QD+RA0FZwAFAP3AmRaAMwD4/dhP0wAIMPj8eNVORJsA9P5AWMdxcoj0/Yfn/CKerPT/aSHoAK/w9P6rLzaUzgT4/FfwsVJ03Pz8T8t693BFAP/e7Ov8XhUA/OzG4M5RAQT+cD71xKRVCP9BVA0P480I//IgxmnP1Qz9EM79r7/5EP/glyQ+fD0Y/9I2mnTMWRz8EXgmFfv1HPxqu5pvPyEg/dOvcalpeST8RaYgNybtJPw==","dtype":"float64","shape":[200]}},"selected":{"id":"56264","type":"Selection"},"selection_policy":{"id":"56265","type":"UnionRenderers"}},"id":"56246","type":"ColumnDataSource"},{"attributes":{},"id":"56227","type":"UndoTool"},{"attributes":{"dimension":1,"ticker":{"id":"56183","type":"BasicTicker"}},"id":"56186","type":"Grid"},{"attributes":{},"id":"56208","type":"LinearScale"},{"attributes":{"tools":[{"id":"56187","type":"ResetTool"},{"id":"56188","type":"PanTool"},{"id":"56189","type":"BoxZoomTool"},{"id":"56190","type":"WheelZoomTool"},{"id":"56191","type":"LassoSelectTool"},{"id":"56192","type":"UndoTool"},{"id":"56193","type":"SaveTool"},{"id":"56194","type":"HoverTool"},{"id":"56152","type":"ResetTool"},{"id":"56153","type":"PanTool"},{"id":"56154","type":"BoxZoomTool"},{"id":"56155","type":"WheelZoomTool"},{"id":"56156","type":"LassoSelectTool"},{"id":"56157","type":"UndoTool"},{"id":"56158","type":"SaveTool"},{"id":"56159","type":"HoverTool"},{"id":"56222","type":"ResetTool"},{"id":"56223","type":"PanTool"},{"id":"56224","type":"BoxZoomTool"},{"id":"56225","type":"WheelZoomTool"},{"id":"56226","type":"LassoSelectTool"},{"id":"56227","type":"UndoTool"},{"id":"56228","type":"SaveTool"},{"id":"56229","type":"HoverTool"}]},"id":"56290","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"56194","type":"HoverTool"},{"attributes":{},"id":"56265","type":"UnionRenderers"},{"attributes":{"high":148,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"56239","type":"LinearColorMapper"},{"attributes":{"toolbar":{"id":"56290","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56291","type":"ToolbarBox"},{"attributes":{},"id":"56210","type":"LinearScale"},{"attributes":{},"id":"56264","type":"Selection"},{"attributes":{},"id":"56187","type":"ResetTool"},{"attributes":{"axis_label":"theta\\nPhillips Andover","formatter":{"id":"56270","type":"BasicTickFormatter"},"ticker":{"id":"56148","type":"BasicTicker"}},"id":"56147","type":"LinearAxis"},{"attributes":{},"id":"56270","type":"BasicTickFormatter"},{"attributes":{},"id":"56259","type":"BasicTickFormatter"},{"attributes":{},"id":"56143","type":"BasicTicker"},{"attributes":{"source":{"id":"56240","type":"ColumnDataSource"}},"id":"56245","type":"CDSView"},{"attributes":{},"id":"56152","type":"ResetTool"},{"attributes":{"below":[{"id":"56177","type":"LinearAxis"}],"center":[{"id":"56181","type":"Grid"},{"id":"56186","type":"Grid"}],"left":[{"id":"56182","type":"LinearAxis"}],"output_backend":"webgl","plot_height":120,"plot_width":480,"renderers":[{"id":"56249","type":"GlyphRenderer"}],"title":{"id":"56257","type":"Title"},"toolbar":{"id":"56195","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56134","type":"DataRange1d"},"x_scale":{"id":"56173","type":"LinearScale"},"y_range":{"id":"56171","type":"DataRange1d"},"y_scale":{"id":"56175","type":"LinearScale"}},"id":"56169","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56155","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56274","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"56240","type":"ColumnDataSource"},"glyph":{"id":"56242","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56243","type":"HexTile"},"selection_glyph":null,"view":{"id":"56245","type":"CDSView"}},"id":"56244","type":"GlyphRenderer"},{"attributes":{},"id":"56175","type":"LinearScale"},{"attributes":{},"id":"56225","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56285","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56262","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56222","type":"ResetTool"},{"id":"56223","type":"PanTool"},{"id":"56224","type":"BoxZoomTool"},{"id":"56225","type":"WheelZoomTool"},{"id":"56226","type":"LassoSelectTool"},{"id":"56227","type":"UndoTool"},{"id":"56228","type":"SaveTool"},{"id":"56229","type":"HoverTool"}]},"id":"56230","type":"Toolbar"},{"attributes":{},"id":"56158","type":"SaveTool"},{"attributes":{"ticker":{"id":"56178","type":"BasicTicker"}},"id":"56181","type":"Grid"},{"attributes":{"callback":null},"id":"56171","type":"DataRange1d"},{"attributes":{},"id":"56223","type":"PanTool"},{"attributes":{},"id":"56192","type":"UndoTool"},{"attributes":{"overlay":{"id":"56273","type":"BoxAnnotation"}},"id":"56154","type":"BoxZoomTool"},{"attributes":{},"id":"56222","type":"ResetTool"},{"attributes":{},"id":"56281","type":"BasicTickFormatter"},{"attributes":{},"id":"56138","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56187","type":"ResetTool"},{"id":"56188","type":"PanTool"},{"id":"56189","type":"BoxZoomTool"},{"id":"56190","type":"WheelZoomTool"},{"id":"56191","type":"LassoSelectTool"},{"id":"56192","type":"UndoTool"},{"id":"56193","type":"SaveTool"},{"id":"56194","type":"HoverTool"}]},"id":"56195","type":"Toolbar"},{"attributes":{"source":{"id":"56246","type":"ColumnDataSource"}},"id":"56250","type":"CDSView"},{"attributes":{},"id":"56286","type":"Selection"},{"attributes":{},"id":"56148","type":"BasicTicker"},{"attributes":{"formatter":{"id":"56259","type":"BasicTickFormatter"},"ticker":{"id":"56183","type":"BasicTicker"}},"id":"56182","type":"LinearAxis"},{"attributes":{},"id":"56261","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56284","type":"BoxAnnotation"},{"attributes":{},"id":"56178","type":"BasicTicker"},{"attributes":{},"id":"56183","type":"BasicTicker"},{"attributes":{},"id":"56218","type":"BasicTicker"},{"attributes":{"below":[{"id":"56212","type":"LinearAxis"}],"center":[{"id":"56216","type":"Grid"},{"id":"56221","type":"Grid"}],"left":[{"id":"56217","type":"LinearAxis"}],"output_backend":"webgl","plot_height":480,"plot_width":120,"renderers":[{"id":"56254","type":"GlyphRenderer"}],"title":{"id":"56279","type":"Title"},"toolbar":{"id":"56230","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56205","type":"DataRange1d"},"x_scale":{"id":"56208","type":"LinearScale"},"y_range":{"id":"56136","type":"DataRange1d"},"y_scale":{"id":"56210","type":"LinearScale"}},"id":"56204","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"56157","type":"UndoTool"},{"attributes":{"callback":null},"id":"56136","type":"DataRange1d"},{"attributes":{"callback":null},"id":"56134","type":"DataRange1d"},{"attributes":{"formatter":{"id":"56283","type":"BasicTickFormatter"},"ticker":{"id":"56213","type":"BasicTicker"}},"id":"56212","type":"LinearAxis"},{"attributes":{"line_width":2.5515518153991437,"x":{"field":"x"},"y":{"field":"y"}},"id":"56247","type":"Line"},{"attributes":{},"id":"56272","type":"BasicTickFormatter"},{"attributes":{},"id":"56193","type":"SaveTool"},{"attributes":{"overlay":{"id":"56284","type":"BoxAnnotation"}},"id":"56224","type":"BoxZoomTool"},{"attributes":{},"id":"56153","type":"PanTool"},{"attributes":{"ticker":{"id":"56213","type":"BasicTicker"}},"id":"56216","type":"Grid"},{"attributes":{"line_width":2.5515518153991437,"x":{"field":"x"},"y":{"field":"y"}},"id":"56252","type":"Line"},{"attributes":{},"id":"56213","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"56285","type":"PolyAnnotation"}},"id":"56226","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"56246","type":"ColumnDataSource"},"glyph":{"id":"56247","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56248","type":"Line"},"selection_glyph":null,"view":{"id":"56250","type":"CDSView"}},"id":"56249","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"56251","type":"ColumnDataSource"},"glyph":{"id":"56252","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56253","type":"Line"},"selection_glyph":null,"view":{"id":"56255","type":"CDSView"}},"id":"56254","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"56148","type":"BasicTicker"}},"id":"56151","type":"Grid"},{"attributes":{"callback":null},"id":"56159","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2.5515518153991437,"x":{"field":"x"},"y":{"field":"y"}},"id":"56248","type":"Line"},{"attributes":{"formatter":{"id":"56281","type":"BasicTickFormatter"},"ticker":{"id":"56218","type":"BasicTicker"}},"id":"56217","type":"LinearAxis"},{"attributes":{"text":""},"id":"56268","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"yNLrhtzvLT/I0uuG3O8tPzfBCDq6oS0/ZU5TFSQLLT+sCwkuyzYsP0qi2SQjMys/IY++YrkQKj/bU7WeXOAoP2dzRd1LmCc/tAZW04l/Jj9alC+sm3klP2zu+0HsiiQ/U5KU+zSzIz8EtMdnMO4iP/NhPo+1NCI/oy/PA9GjIT+G7TvsV/kgP72HLMFqSCA/TQBdBkUbHz9bRfFTZ5EdP9ZVgOwt+Rs/cx0y4YFeGj9WP/eB7tEYP+zZiUM7shc/Scy8D3E8Fj8FLEe34e4VP+hTLYHu1hU/3TDEHcmGFj8e19V5ETEYPwYZXPj7eBo/9YSSp9lbHT+nk2VjCLEgP/b5ZOblNSM/YUrAr9DcJj8IVUSc0BUrP0RAFHNRvi8/Jw6s31W/Mj/dZE5QrzM2P02Id1kkHDo/hlK9pNuMPj8IsTizwNpBP/YZAImpyUQ/i/PZfHccSD+R/MgW+MRLP5pqfpu/4k8/PBo4J6EmUj+BZHusYJJUP1dDf3G/HVc/8u8OPBHSWT8d0Jjm/rVcPwoFImAsol8/SNBIVjNOYT/tweOrEdtiP47vt0j2bmQ/XhauN34TZj8axoNPyslnP4fJ3rdyjGk/LouvhXhsaz9nHkCWKWxtP2SuFYp8o28/1AcktUUAcT+BgfRDV01yP2qzykWRwnM/3OPqIgZddT8u5d430iB3P448tH+BFnk/Iyn7MlQxez+Ebc5N2YN9P53Pgy2c938/0oOpxfpRgT+r6ajqy7eCP5IT8MRENYQ/WreglmzGhT/ZYX/oEmuHP+sl7WmXKYk/qgUkVwABiz+XNZdTDPWMPx8Aaa2RAI8/D+z6ZM+XkD/Iclb5ysORP5xJVvdcBJM/IlYZ3WhclD/Mmi8FeMiVP6XDiHMFU5c/WtVH7JTzmD/My9Kh7KqaP6i/Tj7Lf5w/tx0xpOZwnj8MCOlAkTugP2Hzr1+2S6E/fxSA5OZooj/nH3yVNJCjPzkWNROpwaQ/KVGjLUT9pT8CCyPIykGnP4AMcPP8iqg/z1iI2MTYqT9Nw5XfgyurP8h9plbYfqw/S+rCcBbNrT/9wkPLdxWvPzFIGObxKrA/bYzrd9HFsD8IJ0WsjVqxP8of7CWA57E/rr8Ygptrsj/x7zSX/eWyP5PJxWVAVrM/3vfO2RK6sz/WYq3PShO0P+6A1A4SXrQ//4FuBzeatD+lqexq2ce0P9E4ah/85LQ/+f6dklvytD/51REI/uy0P2X9PP8q1rQ/8dtq2USstD81ANuDFnC0P4xwA3HvIbQ/kIUjQlvCsz9aJ7mrBlKzP0A3JlSg0rI/8B3swwJGsj++X/XCG62xPw0A5bK5CbE/DVAp+vpdsD+K0PwyQVevP4ckhVOh6q0/x2rAbH50rD9NORb5MfyqP8MiTf/Sg6k/71QAyGQKqD/kB9UesZSmPyYr/UtqJ6U/XerInSDCoz836YvXmWaiPxDjrPFRGqE/pRyRli65nz/MKqAQv12dP4n6sQHhJJs/1POK2uEUmT8aV8KwfyqXP6GqDXgWYpU/o2ADjqm+kz/lUlDpx0SSPz+uTM4X6pA/6RZQUiZXjz8w/oRDGg+NP/oN5pLE8Io/bFXFfgf9iD9VJS1KpiyHP/RM7Pe8fYU/7uuPMnXkgz/SEE3RcWiCP8ynqy7194A/ee8QOoZOfz9pvm7H/NJ8P4T7d6Xid3o/Jne2Pzg9eD/joHL1PCJ2P0F1XWOZMXQ/EstK1LFkcj/k8jo+1rlwP2C1xlYjXW4/Yib66kKBaz8uefqAkthoP8FcE8sSfGY/JMapwXRQZD9eExVvcFtiPyb2C8rFjGA/n/hwzubLXT9OJALPp99aP+WxG7/+MFg/6htxD9GwVT9MVhgq+HhTP49yOTQvj1E/fCOQjUaWTz8SZ4R0WW5MP4lGuy44jkk/wGvqAf4CRz+t8qr57LBEP3IHUrTqqkI/WK/XECTLQD96GC1hkYE+P8v8syIg4Ts/sJKZQCmwOT8dS4LM7OE3P8geaC67nTY/4y/RU3+VNT9naBhBaQ41PyUcnuN0vzQ/k1lNMEvWND+H3PSOZCs1P6YvduTBnTU/4yZ47MkdNj/ziiXkgJs2P+6dDN1pATc/y/WbTLtyNz8aLXlRHLA3Pw==","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"56286","type":"Selection"},"selection_policy":{"id":"56287","type":"UnionRenderers"}},"id":"56251","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56263","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"56274","type":"PolyAnnotation"}},"id":"56156","type":"LassoSelectTool"},{"attributes":{"text":""},"id":"56279","type":"Title"}],"root_ids":["56292"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8634abb9-f1f4-466a-bfe9-9e384b3f92c9","roots":{"56292":"0167981d-79ee-4b7e-a275-af94f26c5ee5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();