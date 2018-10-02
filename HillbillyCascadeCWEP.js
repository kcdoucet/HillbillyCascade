<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="../../SiteAssets/HillbillyCascade.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
	
		var cascadeArray = new Array();
		
		cascadeArray.push({
			parentFormField: "Unit", //Display name on form of field from parent list
			childList: "Area", //List name of child list
			childLookupField: "Title", //Internal field name in Child List used in lookup
			childFormField: "Unit", //Display name on form of the child field
			parentFieldInChildList: "Area", //Internal field name in Child List of the parent field
			firstOptionText: "< Select an Area >"
		});

		
		$().HillbillyCascade(cascadeArray);
			
	});
	
	
</script>
