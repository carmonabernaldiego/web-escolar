if (getURLvalue('btnsearch')) {
	// Do the search
	results = performSearch(getURLvalue("searchtext"), 3);

	if (results) {
		// This means that there are search results to be displayed.
		// Loop through them and make it pretty! :)
		if (is_array(results)) {
			document.writeln("<ul class=\"listing\">");
			for (r = 0; r < results.length; r++) {
				result = searchDB[results[r]];
			
				/////////////////////////////////////////////////////////////
				// This is where you modify the formatting of the results
				document.writeln("<h3><li class=\"result\"><div class=\"result-title\"><a href=\"" + result.url + "\">" + result.heading + "</a></div></h3>");
				document.writeln("<h4><div class=\"result-desc\">" + result.description + "</div></li></h4>");
				/////////////////////////////////////////////////////////////
			}
			document.writeln("</ul>");
		}
		// If it's not an array, then we got an error message, so display that
		// rather than results
		else {
			document.writeln("<i>" + results + "</i>");
			document.writeln("<br />");
		}
	} else {
		searchForm();
	}
} else {
	searchForm();
}