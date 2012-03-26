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

				if($input.is(":checked")){

					// assign checked status
					$myLabel.addClass('checked');

				} else {

					// remove checked status
					$myLabel.removeClass('checked');

				}

			} );

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