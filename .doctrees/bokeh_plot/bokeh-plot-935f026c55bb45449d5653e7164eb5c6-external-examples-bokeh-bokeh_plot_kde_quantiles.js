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
      };var element = document.getElementById("dbef0d50-9ccd-4e41-a9c2-c0a1266a17be");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'dbef0d50-9ccd-4e41-a9c2-c0a1266a17be' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ae3d6bda-e47b-4637-8657-c41f88ea107b":{"roots":{"references":[{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"57060","type":"Patch"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[262]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCUg94tiSpP8JSD3i2JKk/5InHtiQpqT8KTPgleRupP0IoeLy8DKk/UQhvTJb0qD909RW2qfSoPyeVzrkODKk/2+lU9so1qT+uJABKgYapP69Ef2YzCKo/wrS5CMDJqj83gHlxQfSrP+5EhOwZWa0/KVD9eUk0rz/76K9W/auwP6xNduzG57E/zXuxzTRYsz/0rscyRPm0PwCNHvw0wLY/+JQq/aSluD//N6vVk6C6PxDdhhjonrw/cMcwEGGivj9kh52e0kbAPzItsx44McE/+yzcQ/EVwj8sPRl83+TCP+QpgceeosM/fEugah9IxD/q4kghdNjEPw5kTDMUUcU/fHz4TIe6xT+SmxejYhbGP8okXBUxZMY/QEvk5rOwxj/Gnpio5/bGP9of2PZNRcc/rTtomXqQxz+Y5rbBjuvHP4mgDq2NS8g/ExO1uhXAyD+do0jaXj7JP0MQXIjG0Mk/RaoE/kpxyj98bkuT9iHLP/nmqnYu6cs/VZ+aExDEzD9X9qcql6fNP00YGy50m84/IkSTPOiYzz/Auc/kNk3QP6HfMshwzNA/iZOVcEVM0T9Df8bKMs3RP2n9JUzBR9I/1Abqe2TG0j/WwENfrT/TP4RCSB5gvNM/FyWoNII41D8I8Xj5irLUP1bhXa4ZLNU/EZ+Cam221T+SMWyY3EDWP5Z38W9U29Y/okX615qG1z+uB5z87UHYP3HObu0cB9k/iXLNd2vb2T+2GM3z8MLaP4jvqxhauds/9ymcgKy13D/nFoXtSbrdP7eQkD8FwN4/GNAYfWPB3z/OaCKCZljgP/DHSeTgzuA/uaxdsKA34T/QRaibppfhPxIdA4J97eE/m7t79Es54j8AavH+mHriP7LVSrvMrOI/Oj4kvQHa4j/798CPXALjP56i6RSNKOM/DCXTsStP4z9Nsx8HCX/jP8fdGQD2teM/1j7O0r344z/K907k0U3kP0Mnz3ijteQ/vUBgl6Av5T9LvXU047vlP13E1V0sWeY/6MyjBTgH5z8YCUDYscTnPze66FzTkeg/T5bh3vVl6T8pl+RPqUDqPxlGkI7sHus/c57ZtmAD7D+ThAd7yuLsP8Qor3qTvu0/DIMLazmW7j9if75MC2vvPwM0QBZUHfA/cR2XPEaD8D8Vf+v9XebwPxwlxwmjSPE/npC88/ur8T/LVKHArAryPxTnE5mBa/I/z2fgfGPI8j9L4GzKaiPzP+OgNvXse/M/xUOUEDvR8z/vozBN5SH0P8qDseVkbfQ/wgSyIl6z9D/S43/3ifX0P2P4pt1WMvU/R6AHKwJu9T9TzF6wMaT1P81AvpD93/U/1jsqSfIZ9j+fs3kbJ1n2P+YVzNTnnPY/BjdjhNTn9j9iCo31Hz73P9GSf8lmoPc/AAAAAAAAAAA=","dtype":"float64","shape":[262]}},"selected":{"id":"57093","type":"Selection"},"selection_policy":{"id":"57094","type":"UnionRenderers"}},"id":"57074","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57085","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57042","type":"ResetTool"},{"id":"57043","type":"PanTool"},{"id":"57044","type":"BoxZoomTool"},{"id":"57045","type":"WheelZoomTool"},{"id":"57046","type":"LassoSelectTool"},{"id":"57047","type":"UndoTool"},{"id":"57048","type":"SaveTool"},{"id":"57049","type":"HoverTool"}]},"id":"57050","type":"Toolbar"},{"attributes":{},"id":"57030","type":"LinearScale"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"57070","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57071","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57076","type":"Patch"},{"attributes":{},"id":"57090","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"57085","type":"BoxAnnotation"}},"id":"57044","type":"BoxZoomTool"},{"attributes":{},"id":"57084","type":"BasicTickFormatter"},{"attributes":{},"id":"57094","type":"UnionRenderers"},{"attributes":{"source":{"id":"57069","type":"ColumnDataSource"}},"id":"57073","type":"CDSView"},{"attributes":{"data_source":{"id":"57064","type":"ColumnDataSource"},"glyph":{"id":"57065","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57066","type":"Patch"},"selection_glyph":null,"view":{"id":"57068","type":"CDSView"}},"id":"57067","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"57023","subtype":"Figure","type":"Plot"},0,0]]},"id":"57096","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57086","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"57069","type":"ColumnDataSource"},"glyph":{"id":"57070","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57071","type":"Patch"},"selection_glyph":null,"view":{"id":"57073","type":"CDSView"}},"id":"57072","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"57038","type":"BasicTicker"}},"id":"57041","type":"Grid"},{"attributes":{},"id":"57087","type":"Selection"},{"attributes":{"callback":null},"id":"57049","type":"HoverTool"},{"attributes":{},"id":"57028","type":"LinearScale"},{"attributes":{"data_source":{"id":"57059","type":"ColumnDataSource"},"glyph":{"id":"57060","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57061","type":"Patch"},"selection_glyph":null,"view":{"id":"57063","type":"CDSView"}},"id":"57062","type":"GlyphRenderer"},{"attributes":{},"id":"57033","type":"BasicTicker"},{"attributes":{"source":{"id":"57074","type":"ColumnDataSource"}},"id":"57078","type":"CDSView"},{"attributes":{},"id":"57043","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"+moYyhEowj/5Pf5hQKLCP/gQ5PluHMM/+OPJkZ2Wwz/3tq8pzBDEP/aJlcH6isQ/9Vx7WSkFxT/0L2HxV3/FP/MCR4mG+cU/8tUsIbVzxj/xqBK54+3GP/B7+FASaMc/707e6EDixz/uIcSAb1zIP+30qRie1sg/7MePsMxQyT/rmnVI+8rJP+ptW+ApRco/6kBBeFi/yj/pEycQhznLP+jmDKi1s8s/57nyP+QtzD/mjNjXEqjMP+Vfvm9BIs0/5DKkB3CczT/jBYqfnhbOP+LYbzfNkM4/4atVz/sKzz/gfjtnKoXPP99RIf9Y/88/b5KDy8M80D9vkoPLwzzQP2+Sg8vDPNA/31Eh/1j/zz/gfjtnKoXPP+GrVc/7Cs8/4thvN82Qzj/jBYqfnhbOP+QypAdwnM0/5V++b0EizT/mjNjXEqjMP+e58j/kLcw/6OYMqLWzyz/pEycQhznLP+pAQXhYv8o/6m1b4ClFyj/rmnVI+8rJP+zHj7DMUMk/7fSpGJ7WyD/uIcSAb1zIP+9O3uhA4sc/8Hv4UBJoxz/xqBK54+3GP/LVLCG1c8Y/8wJHiYb5xT/0L2HxV3/FP/Vce1kpBcU/9omVwfqKxD/3tq8pzBDEP/jjyZGdlsM/+BDk+W4cwz/5Pf5hQKLCP/pqGMoRKMI/+moYyhEowj8=","dtype":"float64","shape":[64]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0TTRmnhL4PzRNNGaeEvg/vd/yvoyR+D/9JOt1jiT5P2w6ZwrcwPk/O9oBStFs+j+ljVIzoSL7P7jBOGCB4vs/IQw5J7Wt/D/9IfORcH39PwmHYSB2Uv4/xB4INjgq/z8LhO7fggEAQDNbtIS5bwBArDLc1sncAECghhbrTkgBQOjiJMjrsgFAQckmcOIfAkC+xOX644sCQM5AGIny9wJAW6p81/xhA0CIjsE8gc8DQO45gui3PQRAJhB5BmCsBEC+LL62ERwFQP9bHGkPjwVAaL/pcCsDBkCSRRmwAXcGQKCx7Geo6gZAbHMZbvJeB0CkgNeZItMHQO5cArvRQwhAAAAAAAAAAAA=","dtype":"float64","shape":[64]}},"selected":{"id":"57091","type":"Selection"},"selection_policy":{"id":"57092","type":"UnionRenderers"}},"id":"57069","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"57098","type":"ToolbarBox"},{"id":"57096","type":"GridBox"}]},"id":"57099","type":"Column"},{"attributes":{"formatter":{"id":"57084","type":"BasicTickFormatter"},"ticker":{"id":"57033","type":"BasicTicker"}},"id":"57032","type":"LinearAxis"},{"attributes":{"data_source":{"id":"57074","type":"ColumnDataSource"},"glyph":{"id":"57075","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57076","type":"Patch"},"selection_glyph":null,"view":{"id":"57078","type":"CDSView"}},"id":"57077","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"57026","type":"DataRange1d"},{"attributes":{"tools":[{"id":"57042","type":"ResetTool"},{"id":"57043","type":"PanTool"},{"id":"57044","type":"BoxZoomTool"},{"id":"57045","type":"WheelZoomTool"},{"id":"57046","type":"LassoSelectTool"},{"id":"57047","type":"UndoTool"},{"id":"57048","type":"SaveTool"},{"id":"57049","type":"HoverTool"}]},"id":"57097","type":"ProxyToolbar"},{"attributes":{},"id":"57091","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Gd5H2Ns4sT8XhBMIOS2yPxUq3zeWIbM/FNCqZ/MVtD8SdnaXUAq1PxAcQset/rU/DsIN9wrztj8MaNkmaOe3PwoOpVbF27g/CLRwhiLQuT8HWjy2f8S6PwUACObcuLs/A6bTFTqtvD8BTJ9Fl6G9P//xanX0lb4//Zc2pVGKvz/+HoFqVz/AP/3xZgKGucA//MRMmrQzwT/7lzIy463BP/uXMjLjrcE/+5cyMuOtwT/8xEyatDPBP/3xZgKGucA//h6Balc/wD/9lzalUYq/P//xanX0lb4/AUyfRZehvT8DptMVOq28PwUACObcuLs/B1o8tn/Euj8ItHCGItC5PwoOpVbF27g/DGjZJmjntz8Owg33CvO2PxAcQset/rU/EnZ2l1AKtT8U0Kpn8xW0PxUq3zeWIbM/F4QTCDktsj8Z3kfY2zixPxneR9jbOLE/","dtype":"float64","shape":[42]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFzeNHA9tAhAXN40cD20CEBty3eXFSIJQKp7LzbdiglAlGUISUbwCUBoUXkHT1EKQCQuunXAqwpAQPDMyBYBC0Dq4f62vk4LQJx8mfqDlAtAGZ7MG83SC0CFLTdH6AkMQAVrybFdNQxA7x/Eh2taDEDSbBQzzHgMQGWY6ZDejwxAwIfB3tyfDEAN1dM/laoMQL5TjkrUsQxA/R0Eu4m0DEAv85Z9n7QMQAAAAAAAAAAA","dtype":"float64","shape":[42]}},"selected":{"id":"57089","type":"Selection"},"selection_policy":{"id":"57090","type":"UnionRenderers"}},"id":"57064","type":"ColumnDataSource"},{"attributes":{},"id":"57092","type":"UnionRenderers"},{"attributes":{"below":[{"id":"57032","type":"LinearAxis"}],"center":[{"id":"57036","type":"Grid"},{"id":"57041","type":"Grid"}],"left":[{"id":"57037","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"57062","type":"GlyphRenderer"},{"id":"57067","type":"GlyphRenderer"},{"id":"57072","type":"GlyphRenderer"},{"id":"57077","type":"GlyphRenderer"}],"title":{"id":"57080","type":"Title"},"toolbar":{"id":"57050","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"57024","type":"DataRange1d"},"x_scale":{"id":"57028","type":"LinearScale"},"y_range":{"id":"57026","type":"DataRange1d"},"y_scale":{"id":"57030","type":"LinearScale"}},"id":"57023","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"57059","type":"ColumnDataSource"}},"id":"57063","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"57075","type":"Patch"},{"attributes":{},"id":"57042","type":"ResetTool"},{"attributes":{},"id":"57089","type":"Selection"},{"attributes":{},"id":"57082","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"57082","type":"BasicTickFormatter"},"ticker":{"id":"57038","type":"BasicTicker"}},"id":"57037","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57061","type":"Patch"},{"attributes":{},"id":"57093","type":"Selection"},{"attributes":{},"id":"57088","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"57024","type":"DataRange1d"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"57065","type":"Patch"},{"attributes":{"source":{"id":"57064","type":"ColumnDataSource"}},"id":"57068","type":"CDSView"},{"attributes":{},"id":"57047","type":"UndoTool"},{"attributes":{"toolbar":{"id":"57097","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"57098","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57066","type":"Patch"},{"attributes":{"ticker":{"id":"57033","type":"BasicTicker"}},"id":"57036","type":"Grid"},{"attributes":{"text":""},"id":"57080","type":"Title"},{"attributes":{},"id":"57038","type":"BasicTicker"},{"attributes":{},"id":"57048","type":"SaveTool"},{"attributes":{"callback":null,"overlay":{"id":"57086","type":"PolyAnnotation"}},"id":"57046","type":"LassoSelectTool"},{"attributes":{},"id":"57045","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"9HZk7PecJD8zBzt4ddVvP3zj17iNMH8/ryHJWjA7hz+gUSbZGd6OP8jAwauBQJM/wVjwavYRlz+68B4qa+OaP7KITenftJ4/VRA+VCpDoT9RXNWz5CujP06obBOfFKU/SvQDc1n9pj9GQJvSE+aoP0OMMjLOzqo/P9jJkYi3rD87JGHxQqCuPxs4fKh+RLA/Gzh8qH5EsD8bOHyofkSwPzskYfFCoK4/P9jJkYi3rD9DjDIyzs6qP0ZAm9IT5qg/SvQDc1n9pj9OqGwTnxSlP1Fc1bPkK6M/VRA+VCpDoT+yiE3p37SeP7rwHipr45o/wVjwavYRlz/IwMGrgUCTP6BRJtkZ3o4/ryHJWjA7hz9849e4jTB/PzMHO3h11W8/9HZk7PecJD/0dmTs95wkPw==","dtype":"float64","shape":[38]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXcj42DqxDEBdyPjYOrEMQG63HZ7prgxAqvGbZ3+qDEBISHwYCKUMQKtLZaGVnQxAm1voGy2VDEDyUwcZE4sMQAtuzS2JfgxAT48GdaJxDEA1Gr9DX2QMQHrpBYzuUgxALX1lfHFBDEDcBTGt3zIMQJshYsszJQxAeUZTEUAXDEDubx1x3AwMQCM4g0fNBgxAwOs/JOEGDEAAAAAAAAAAAA==","dtype":"float64","shape":[38]}},"selected":{"id":"57087","type":"Selection"},"selection_policy":{"id":"57088","type":"UnionRenderers"}},"id":"57059","type":"ColumnDataSource"}],"root_ids":["57099"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"ae3d6bda-e47b-4637-8657-c41f88ea107b","roots":{"57099":"dbef0d50-9ccd-4e41-a9c2-c0a1266a17be"}}];
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