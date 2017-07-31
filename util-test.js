'use strict'

module.exports = {

	mention: [
		['Text with 0 mentions', 0],
		['Text with 0@mentions', 0],
		['Text@mentions with 0', 0],
		['Text with 0 @mentiooooooooooonnnnnnnnnnsssssssssss', 0],
		['Text with 1 @mention', 1],
		['1 @mention Text with', 1],
		['@mention 1 Text with', 1],
		['Text @mention with 1', 1],
		['with @mention 1 Text', 1],
		['Text with 2 @mention and @othermention', 2],
		['2 @mention Text @othermention with and', 2],
		['@mention @othermention 2 Text and with', 2],
		['Text and @mention with @othermention 2', 2],
		['@othermention and with @mention 2 Text', 2],
		['Text with 3 or more @mention and @othermention and @another', 3],
		['3 or more @mention @another and Text @othermention with and', 3],
		['@mention @othermention 3 or more and @another Text and with', 3],
		['and Text @another and @mention with @othermention 3 or more', 3],
		['@another @othermention and and with @mention 3 or more Text', 3]
	],

	hashtag: [
		['Text with 0 hashtag', 0],
		['Text with 0#hashtag', 0],
		['Text#hashtag with 0', 0],
		['Text with 1 #hashtag', 1],
		['1 #hashtag Text with', 1],
		['#hashtag 1 Text with', 1],
		['Text #hashtag with 1', 1],
		['with #hashtag 1 Text', 1],
		['Text with 2 #hashtag and #otherhashtag', 2],
		['2 #hashtag Text #otherhashtag with and', 2],
		['#hashtag #otherhashtag 2 Text and with', 2],
		['Text and #hashtag with #otherhashtag 2', 2],
		['#otherhashtag and with #hashtag 2 Text', 2],
		['Text with 3 or more #hashtag and #otherhashtag and #another', 3],
		['3 or more #hashtag #another and Text #otherhashtag with and', 3],
		['#hashtag #otherhashtag 3 or more and #another Text and with', 3],
		['and Text #another and #hashtag with #otherhashtag 3 or more', 3],
		['#another #otherhashtag and and with #hashtag 3 or more Text', 3]
	]

};