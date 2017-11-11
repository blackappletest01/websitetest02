// Initialize the viz variable 
var vizMedicareIPChrg01, vizMedicareOPChrg01, vizSacPoliceDispatch;

window.onload= function() {
// When the webpage has loaded, load the viz

    var placeholder = document.getElementById('MedicareIPChargeViz01');
    var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/IPChargeDashboard';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareIPChrg01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('MedicareOPChargeViz01');
    var vizURL = 'https://public.tableau.com/views/MedicareChargeProject_0/OPChargeDashboard';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizMedicareOPChrg01 = new tableau.Viz(placeholder, vizURL, options);

	
    var placeholder = document.getElementById('mySacPoliceDispatch');
    var vizURL = 'https://public.tableau.com/views/SacPoliceDispatchDashboard/SacramentoPoliceDispatchAnalysis';
    var options = {
    	width: '1200px',
    	height: '660px',
    	hideToolbar: true,
    	hideTabs: true
    };

	vizSacPoliceDispatch = new tableau.Viz(placeholder, vizURL, options);

};

// Switch the viz to the sheet specified
// function switchView(sheetName) {
	// var workbook = vizActionOIExec.getWorkbook();
	// workbook.activateSheetAsync(sheetName);
// }
function switchView(sheetName) {
	var workbook = vizActionOIDept.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}





// Filter the specified dimension to the specified value(s)
function show(filterName, values) {
	var sheet = vizActionOIDept.getWorkbook().getActiveSheet();
	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
	var sheet = vizActionOIDept.getWorkbook().getActiveSheet();
	sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}