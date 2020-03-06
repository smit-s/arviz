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
      };var element = document.getElementById("0f39a276-3604-4146-a6df-5012c38fa692");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0f39a276-3604-4146-a6df-5012c38fa692' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d542e6ab-19a6-4346-bde7-76f66b2dd35b":{"roots":{"references":[{"attributes":{},"id":"54538","type":"PanTool"},{"attributes":{},"id":"54614","type":"BasicTickFormatter"},{"attributes":{},"id":"54575","type":"HelpTool"},{"attributes":{"ticker":{"id":"54529","type":"BasicTicker"}},"id":"54532","type":"Grid"},{"attributes":{},"id":"54541","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"Zup4xoA+dD82rU7XNWt0P6VnX9VYt3Q/3/u/KkJ5dT8IgnpJZXR2P8VrZVj9yHc/WDwbINRieT/BZ45ScDt7P6Kz0+19dn0/dE22EOQNgD8gW36U54aBPwtBXApGL4M/s9821vYAhT/VxKMlpw2HPxrAzF/pPYk/9C61PLCpiz811RVJYV2OP2zXjCuHmJA/mUm/kLAbkj/f3VY+Ur2TP/QxTgIBdJU/wYxhIltElz9nGG0QziKZP0wftJBbEZs/FSAby6cXnT+8ce/nxiGfPwszVdnDpqA/5BoH6K+6oT+1QedgqNeiP3QXzw+X9KM/Vy+dFQoZpT+d5RZQ8T2mP30B33F0bac/PE97zVKmqD8ik7VgWfKpP4BG080PSqs/+QO9qBi8rD86HoU4EEiuP7SAaPwl768/4R02Nc/YsD/2rOS69cyxP17ql1KU17I/4EsoDX70sz9NbcpOmCi1PxpzdktVfbY/ptvMSsvmtz/2r9eLLGu5P6y1UJ57Cbs/Hda0PD28vD/uhr+EO4q+PyXSLGyNM8A/sVL9efArwT+Pz37OJivCP1PRUPnfL8M/7tox13U3xD/NmFLY60HFP0YR4ApkTsY/Ymh7/6BUxz/niKSWhFrIP6JD0aNiXck/xijAVodayj+dqR+zXFDLPwi+OxIVQcw/G+RPtrkrzT/z3T3ORA3OPxZgiE0/6M4/YAxxxuDAzz9Cbx/nHUjQP1kgMltQrNA/3CWIkpkP0T+iUMh/D2/RPyXv2izzzNE/z8CjP7so0j+s0JL3X4LSP1T/0kDY2tI/7AQc/BQx0z9VHmYVZIXTP0au/nXq19M/76KCd/8p1D9gM5S6anjUP6j2gqhqxtQ/8tUT+GsQ1T8hCatCC1bVPxgj7boLmNU/yDEE8HzX1T/dnIkb2A/WP4yYMgxtRdY/Ur/g9vJ11j9uhv8CJ6PWPwv3Zef6y9Y/0lOyG3Tz1j822rIMZBrXP+JpEzo9Qdc/+Tg+XHtm1z+50U2mUY3XP7E7REJit9c/K0XBd2zk1z+VLa3BoBPYP28s+0TIQtg/TY9zAwR02D/XFyerB6TYP6lZYARG0Ng/F8P8/N/42D8g/SnoPBnZP8vtNhc+MNk/FJda1/Y62T/jE7op2zrZP8kOMA+bKNk/q2mtMYYF2T/8U9q4LtLYP6seKww9jdg/+pbtuYg22D8zZ8RIidDXP+K7U1bFXdc/ZzPPe7Hd1j8CKn+pqVLWP+cTK7ibw9U/y5vJwRIv1T+zYP/31ZfUP4syUlo2A9Q/MwFoYe5x0z/77s942OXSP5napc9GYdI/RtLpvoDk0T+0PeYng3DRPwi8L8rvBdE/tNR1QfSh0D8sfZnIHEPQPwyT8E3j1c8/+9Czpkspzz8xvN3ktYLOP5QC5zCk3M0/odHNKGAzzT+kDxWGnIPMP2PJf5mo0ss/VmBTuXMWyz8VK5CojlTKP+prlO6Iisk/CTbOxOm7yD+Slgp7/uPHP3Sf08XpBsc/kCNXX+cmxj8KEAvtO0bFP1FIQoYUZsQ/LpbSjtqBwz9e87Neo53CP4nqFgiou8E/PZ5ybxncwD8vlx9zCfm/Pz6derGRPL4/FCV/kDOIvD9Tu6O6Cta6P86M8jjaL7k/0O0+E72Rtz+VNhGv0f21P5Hv2S8ddLQ/NE3mvV/+sj9H+ZGFDZixP8XiT9TbPrA/4acdc7j0rT/pRG/25YirPzQCJznxPqk/Z4fZstURpz8NeVU/awylPxBDdXGcKaM/ofvBvapfoT/rNrwQ7oCfP9eHlF6gepw/llcBWFGzmT9Sbcpz6yiXP2InEJy845Q/FEYTsZ7Ukj9ICfByaQmRPz5wj3AX7o4/pguV6SA7jD9B/GCq8/qJP+KC5kVPJ4g/9gpoS9qLhj+rliPsfUSFP20u2WxZLoQ/zyf6heFegz+sUXYwqaeCP3Eyass2GoI/drFchFqUgT+0icbMATGBP822anqN64A/m9HD5q6rgD/MmGkqX26APzEo/bJ2TIA/J5ESWi9MgD+7H7uqUl+APyNA/hbddIA/cv3sE9WWgD8XppMrvsaAP4TiNAb4+4A/NkUAJUQygT9FrJnfLGqBP/DjgW3Nk4E/NDQVv923gT84rLLUFsiBPw==","dtype":"float64","shape":[200]}},"selected":{"id":"54619","type":"Selection"},"selection_policy":{"id":"54620","type":"UnionRenderers"}},"id":"54597","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"54552","type":"DataRange1d"},{"attributes":{"data_source":{"id":"54583","type":"ColumnDataSource"},"glyph":{"id":"54584","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54585","type":"Quad"},"selection_glyph":null,"view":{"id":"54587","type":"CDSView"}},"id":"54586","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"54520","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"54534","type":"BasicTicker"}},"id":"54537","type":"Grid"},{"attributes":{"overlay":{"id":"54594","type":"BoxAnnotation"}},"id":"54540","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"54591","type":"BasicTickFormatter"},"ticker":{"id":"54534","type":"BasicTicker"}},"id":"54533","type":"LinearAxis"},{"attributes":{},"id":"54593","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"54597","type":"ColumnDataSource"},"glyph":{"id":"54598","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54599","type":"Line"},"selection_glyph":null,"view":{"id":"54601","type":"CDSView"}},"id":"54600","type":"GlyphRenderer"},{"attributes":{},"id":"54574","type":"ResetTool"},{"attributes":{},"id":"54542","type":"ResetTool"},{"attributes":{"formatter":{"id":"54593","type":"BasicTickFormatter"},"ticker":{"id":"54529","type":"BasicTicker"}},"id":"54528","type":"LinearAxis"},{"attributes":{},"id":"54558","type":"LinearScale"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"54585","type":"Quad"},{"attributes":{"overlay":{"id":"54618","type":"BoxAnnotation"}},"id":"54572","type":"BoxZoomTool"},{"attributes":{},"id":"54526","type":"LinearScale"},{"attributes":{"source":{"id":"54597","type":"ColumnDataSource"}},"id":"54601","type":"CDSView"},{"attributes":{},"id":"54539","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"54584","type":"Quad"},{"attributes":{},"id":"54616","type":"Selection"},{"attributes":{},"id":"54620","type":"UnionRenderers"},{"attributes":{},"id":"54543","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"54538","type":"PanTool"},{"id":"54539","type":"WheelZoomTool"},{"id":"54540","type":"BoxZoomTool"},{"id":"54541","type":"SaveTool"},{"id":"54542","type":"ResetTool"},{"id":"54543","type":"HelpTool"}]},"id":"54544","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"54570","type":"PanTool"},{"id":"54571","type":"WheelZoomTool"},{"id":"54572","type":"BoxZoomTool"},{"id":"54573","type":"SaveTool"},{"id":"54574","type":"ResetTool"},{"id":"54575","type":"HelpTool"}]},"id":"54576","type":"Toolbar"},{"attributes":{},"id":"54534","type":"BasicTicker"},{"attributes":{},"id":"54571","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"54566","type":"BasicTicker"}},"id":"54569","type":"Grid"},{"attributes":{},"id":"54612","type":"BasicTickFormatter"},{"attributes":{},"id":"54573","type":"SaveTool"},{"attributes":{},"id":"54529","type":"BasicTicker"},{"attributes":{},"id":"54561","type":"BasicTicker"},{"attributes":{"formatter":{"id":"54614","type":"BasicTickFormatter"},"ticker":{"id":"54561","type":"BasicTicker"}},"id":"54560","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54618","type":"BoxAnnotation"},{"attributes":{},"id":"54524","type":"LinearScale"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"54598","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54594","type":"BoxAnnotation"},{"attributes":{},"id":"54619","type":"Selection"},{"attributes":{"text":""},"id":"54589","type":"Title"},{"attributes":{"callback":null},"id":"54554","type":"DataRange1d"},{"attributes":{"text":""},"id":"54606","type":"Title"},{"attributes":{"children":[{"id":"54519","subtype":"Figure","type":"Plot"},{"id":"54551","subtype":"Figure","type":"Plot"}]},"id":"54602","type":"Row"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],"top":{"__ndarray__":"2/l+arx0kz+kcD0K16OwP0w3iUFg5cA/CtejcD0Kxz9oke18PzXOPwaBlUOLbMc/CtejcD0Ktz9aZDvfT42nP9nO91PjpZs/eekmMQisjD97FK5H4Xp0P/yp8dJNYmA/AAAAAAAAAAD8qfHSTWJQPw==","dtype":"float64","shape":[14]}},"selected":{"id":"54616","type":"Selection"},"selection_policy":{"id":"54617","type":"UnionRenderers"}},"id":"54583","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"54612","type":"BasicTickFormatter"},"ticker":{"id":"54566","type":"BasicTicker"}},"id":"54565","type":"LinearAxis"},{"attributes":{},"id":"54556","type":"LinearScale"},{"attributes":{"items":[{"id":"54596","type":"LegendItem"}]},"id":"54595","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"54599","type":"Line"},{"attributes":{},"id":"54566","type":"BasicTicker"},{"attributes":{},"id":"54617","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"54522","type":"DataRange1d"},{"attributes":{},"id":"54570","type":"PanTool"},{"attributes":{"source":{"id":"54583","type":"ColumnDataSource"}},"id":"54587","type":"CDSView"},{"attributes":{"below":[{"id":"54528","type":"LinearAxis"}],"center":[{"id":"54532","type":"Grid"},{"id":"54537","type":"Grid"},{"id":"54595","type":"Legend"}],"left":[{"id":"54533","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"54586","type":"GlyphRenderer"}],"title":{"id":"54589","type":"Title"},"toolbar":{"id":"54544","type":"Toolbar"},"x_range":{"id":"54520","type":"DataRange1d"},"x_scale":{"id":"54524","type":"LinearScale"},"y_range":{"id":"54522","type":"DataRange1d"},"y_scale":{"id":"54526","type":"LinearScale"}},"id":"54519","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"54586","type":"GlyphRenderer"}]},"id":"54596","type":"LegendItem"},{"attributes":{},"id":"54591","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"54561","type":"BasicTicker"}},"id":"54564","type":"Grid"},{"attributes":{"below":[{"id":"54560","type":"LinearAxis"}],"center":[{"id":"54564","type":"Grid"},{"id":"54569","type":"Grid"}],"left":[{"id":"54565","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"54600","type":"GlyphRenderer"}],"title":{"id":"54606","type":"Title"},"toolbar":{"id":"54576","type":"Toolbar"},"x_range":{"id":"54552","type":"DataRange1d"},"x_scale":{"id":"54556","type":"LinearScale"},"y_range":{"id":"54554","type":"DataRange1d"},"y_scale":{"id":"54558","type":"LinearScale"}},"id":"54551","subtype":"Figure","type":"Plot"}],"root_ids":["54602"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"d542e6ab-19a6-4346-bde7-76f66b2dd35b","roots":{"54602":"0f39a276-3604-4146-a6df-5012c38fa692"}}];
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