steal(
	'//jqueryui/uijmvc/jquery.ui.core.js'
).then(
	'//jqueryui/uijmvc/jquery.ui.widget.js'
).then(
	'//jqueryui/uijmvc/jquery.ui.button.js',
	'//jqueryui/uijmvc/jquery.ui.mouse.js',
	'//jqueryui/uijmvc/jquery.ui.position.js'
).then(
	'//jqueryui/uijmvc/jquery.ui.resizable.js',
	'//jqueryui/uijmvc/jquery.ui.draggable.js' // order (and then's) important; otherwise buildjs builds faulty production.js
).then(
	'//jqueryui/ui/jquery.ui.dialog.js',

//css
	'../../jqueryui/themes/base/jquery.ui.button.css',
	'../../jqueryui/themes/base/jquery.ui.resizable.css',
	'../../jqueryui/themes/base/jquery.ui.dialog.css'
);
