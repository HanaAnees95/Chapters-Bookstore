jssor_3_slider_init = function() {

    var jssor_3_options = {
      $AutoPlay: 2,
      $AutoPlaySteps: 5,
      $SlideDuration: 160,
      $SlideWidth: 145,
      $SlideSpacing: 1,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $Steps: 5
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 750;

    function ScaleSlider() {
        var containerElement = jssor_3_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_3_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};
