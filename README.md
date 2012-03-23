#Magic Labels
####Simple [jQuery](http://www.jquery.com) plugin to use radiobutton/checkbox labels as hooks for stylable buttons

###Requirements
- Latest version of [jQuery](http://www.jquery.com) - at least version 1.5
- The plugin

###Setup
- Download and place the plugin with your other javascripts
- Place link to plugin at foot of webpage (before closing </body> tag), make sure you called jQuery first.

```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/libs/jquery-1.7.1.min.js"><\/script>')</script>
<script type="text/javascript" src="js/magiclabels.js"></script>
```

- Make sure your radiobuttons or checkboxes have properly assigned labels

```html
<div class="buttons">
	<label for="apples">Apples</label>
	<label for="oranges">Oranges</label>

	<input type="radio" checked="" value="apples" id="apples" name="fruits">
	<input type="radio" value="oranges" id="oranges" name="fruits">
</div>
```

- Link Magic Labels to the wrapper that holds the buttons you wish to style. There are currently no options to be passed.

```javascript
$(document).ready(function(){
	$('.buttons').magicLabels();
});
```

- Now, in your CSS, hide your buttons and style your labels

```css
.buttons input { display: none }
.buttons labels { color: #333; } // unchecked
.buttons labels.checked { color: #11A0C7; } // checked
```

###Upcoming
The above styles are the very, VERY basic. Like everything that is possible with CSS the styles that you apply to your labels are endless.

Here are a few things I plan for the future of this plugin:

1. Event State classes to give more button-like control to your labels. These include hover, disabled and active states.
2. A library of "themes" that you can use immediately after downloading. Just link the stylesheet and roll with it.
