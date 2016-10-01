  $(document).ready(function(){
                scrollUpThere();
            });


            function scrollUpThere()
            {
                var $foo = $('#inbox');
                var lastParagraphPosition = $('#inbox div:last').position();
                var scrollPosition = $foo.scrollTop() + lastParagraphPosition.top;
                $foo.scrollTop(scrollPosition);
            }

            $(document).on('click','#inbox',function(e){
                e.preventDefault();
                var message = $('#messageBox').val();
                $('#inbox').append("<div id='free-5'></div><div style='border-radius:20px; box-shadow:1px 1px 2px #ccc; background:#f1f1f1; max-width:40%; font-size:12px; color:#3CB3F7; padding:6px 10px 6px; display:inline; float:right;'>"+message+"<div>");
                scrollUpThere();
            });    