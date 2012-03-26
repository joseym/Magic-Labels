(function($){

	$.fn.magicLabels = function(options){

		/**
		 * Get an inputs label
		 * @param  string id The id of the `input`, this will look for the label with the same `for` attribute
		 * @return object
		 */
		var $label = function(id){
			return $('label[for="' + id + '"]');
		};

		return this.each(function(){

			var $this = $(this),
				$input, $elements = $this.find('input[type="radio"], input[type="checkbox"]'),
				type,
				// reset
				reset = function(group){
					// find all elements from the same button group
					$elements = $this.find('input[name=' + group + ']');

					// remove the checked state
					$elements.each( function(i) {
						$input = $(this);
						$label( $input.attr('id') ).removeClass('checked');
					} );
				},

				/**
				 * Returns an object containing both the input and its label
				 * @param  object $element The element that we initialize from. Could be the label or the input
				 * @return object          object containing the radiobutton/checkbox and it's label
				 */
				$getTriggers = function($element){
				
					var type = $element[0].tagName.toLowerCase(),
						items = {};

					if(type === 'input') {
						items.input = $element;
						items.label = $label( $element.attr('id') );
					} else if (type === 'label'){
						items.input = $('input#' + $element.attr('id'));
						items.label = $element;
					}

					return items;
				}
			;

			// Namespace the plugin for future theme library
			$this.addClass('magicLabels');

			// Things to do on load
			// ------------------------------------------
			// find the input marked as checked
			// assign them to `$selectedInputs`
			$elements.each( function(i) {

				$input = $(this); type = $input.attr('type');
				var $myLabel = $label( $input.attr('id') );

				// add ML namespaced label
				$myLabel.addClass('mlabel');
				$input.addClass('minput');

				// add label disabled state
				if($input.is(":disabled")) $myLabel.addClass('disabled');

				if($input.is(":checked")){

					// assign checked status
					$myLabel.addClass('checked');

				} else {

					// remove checked status
					$myLabel.removeClass('checked');

				}

			} );

			/**
			 * Apply Hover State
			 * Apply hover state from either the input or the label. 
			 * Applys to both elements
			 * @return null
			 */
			$('.mlabel, .minput').hover(

				function() {

					$input = $(this), $elements = $getTriggers( $(this) );
					$elements.input.addClass('hover');
					$elements.label.addClass('hover');


				},
				function() {

					$input = $(this), $elements = $getTriggers( $(this) );
					$elements.input.removeClass('hover');
					$elements.label.removeClass('hover');

				}

			);

			/**
			 * Apply Active State
			 * Apply active state from either the input or the label. 
			 * Applys to both elements
			 * @return null
			 */
			$('.mlabel, .minput').mousedown(function(){
				$input = $(this), $elements = $getTriggers( $(this) );
				$elements.input.addClass('active');
				$elements.label.addClass('active');
			});
			$('.mlabel, .minput').mouseup(function(){
				$input = $(this), $elements = $getTriggers( $(this) );
				$elements.input.removeClass('active');
				$elements.label.removeClass('active');
			});

			// How to handle element clicks
			// ------------------------------------------
			// clicking a radiobutton unsets all other labels then sets the clicked element
			// clicking a checkbox checks to see if the event check or unchecked the button, then triggers the element accordingly
			$elements.click(function(e){

				$input = $(this); type = $input.attr('type');
				var $myLabel = $label( $input.attr('id') );

				if(type === 'checkbox'){

					if($input.is(':checked')){
						// Assign it as checked
						$myLabel.addClass('checked');
					} else {
						// Assign it as unchecked
						$myLabel.removeClass('checked');
					}

				} else if(type === 'radio'){

					reset( $input.attr('name') );
					$myLabel.addClass('checked');

				}

			});


		});

	};

})(jQuery);