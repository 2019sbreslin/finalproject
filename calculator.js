var calculator = (function()
{
	var form;
	var results;

	return {
		init: function()
		{
			form = $('.calculator form');
			results = $('.calculator .results');

			form.find('input').bind('change', update);

		}
	};

	function update()
	{
		$.ajax(
		{
			type: 'post',
			data: form.serialize(),
			dataType: 'json',
			url: 'generate.php',
			success: function(calculator)
			{
				if (calculator.score !== null)
				{
					results.show().find('.handicap').html(calculator.score);
				}
				else
				{
					results.hide();
				}
			}
		});
	}
})();


$(function()
{
	calculator.init();
});