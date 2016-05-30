var Config = {
	defaultValue : "[32m[37m[41m #ERROR  [49m[32m[39m",
	marginTop : 1,
	marginLeft : 2,
	width : 20,
	formatter : null,
	headerAlign : "center",
	footerAlign : "center",
	align : "center",
	paddingRight : 0,
	paddingLeft : 0,
	paddingBottom : 0,
	paddingTop : 0,
	color : false,
	headerColor : "yellow",
	footerColor : false,
	borderStyle : 1,
	borderCharacters : [
		[
			{v: " ", l: " ", j: " ", h: " ", r: " "},
			{v: " ", l: " ", j: " ", h: " ", r: " "},
			{v: " ", l: " ", j: " ", h: " ", r: " "}
		],
		[
			{v: "│", l: "┌", j: "┬", h: "─", r: "┐"},
			{v: "│", l: "├", j: "┼", h: "─", r: "┤"},
			{v: "│", l: "└", j: "┴", h: "─", r: "┘"}
		],
		[
			{v: "|", l: "+", j: "+", h: "-", r: "+"},
			{v: "|", l: "+", j: "+", h: "-", r: "+"},
			{v: "|", l: "+", j: "+", h: "-", r: "+"}
		]
	],
	tableType : null //horizontal,vertical,cross
};

Config.GUTTER = 1;
//save so cell options can be merged into column options
Config.columnSettings = []; 
Config.headerEmpty = false;
Config.table = {
	columns : [],
	columnWidths : [],
	columnInnerWidths : [],
	header : '', //post-rendered strings.
	body : '', 
	footer : '',
	height : 0,
	typeLocked : false //once a table type is selected can't switch
};

module.exports = Config;
