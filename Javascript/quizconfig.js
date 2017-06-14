/* Holds the questions, possible answer options, and correct answers to be loaded into the review quiz. */

// An array to hold the quiz's questions. 
var questions = [
					"Which of these CSS variations is not a single specification?",
					"Which of these CSS style rules is the most specific?",
					"A sibling selector will only apply the style rule to elements that are immediate siblings.",
					"How are CSS style rules formatted?",
					"Which selector would you use to apply a style rule to a class with the name 'main'?",
					"Which selector would you use to apply a style rule to an unordered list that is beside a paragraph in the HTML and wrapped within another class?",
					"Which of these types of styling is the most specific?",
					"<p>What would be coloured red if the following style rule was applied to the HTML markup below? #thisBox > p { color: red; }</p><code id=\"excode\"><p>&lt;div id=\"thisBox\"&gt;</p><p>&lt;p&gt;This is the first paragraph.&lt;/p&gt;</p><p>&lt;ul&gt;</p><p>&lt;li&gt;This is a list item.&lt;/li&gt;</p><p>&lt;/ul&gt;</p><p>&lt;div class=\"special\"&gt;</p><p>&lt;p&gt;This is the second paragraph.&lt;/p&gt;</p><p>&lt;p&gt;This is the third paragraph.&lt;/p&gt;</p><p>&lt;/div&gt;</p><p>&lt;div id=\"a\"&gt;</p><p>&lt;p&gt;This is the fourth paragraph.&lt;/p&gt;</p><p>&lt;input type=\"button\" value=\"Example Button\"&gt;</p><p>&lt;/div&gt;</p></code>",
					"<p>What would be coloured red if the following style rule was applied to the HTML markup below? #a { color: red }</p><code id=\"excode\"><p>&lt;div id=\"thisBox\"&gt;</p><p>&lt;p&gt;This is the first paragraph.&lt;/p&gt;</p><p>&lt;ul&gt;</p><p>&lt;li&gt;This is a list item.&lt;/li&gt;</p><p>&lt;/ul&gt;</p><p>&lt;div class=\"special\"&gt;</p><p>&lt;p&gt;This is the second paragraph.&lt;/p&gt;</p><p>&lt;p&gt;This is the third paragraph.&lt;/p&gt;</p><p>&lt;/div&gt;</p><p>&lt;div id=\"a\"&gt;</p><p>&lt;p&gt;This is the fourth paragraph.&lt;/p&gt;</p><p>&lt;input type=\"button\" value=\"Example Button\"&gt;</p><p>&lt;/div&gt;</p></code>",
					"<p>What would be coloured red if the following style rule was applied to the HTML markup below? #thisBox p { color: red; }</p><code id=\"excode\"><p>&lt;div id=\"thisBox\"&gt;</p><p>&lt;p&gt;This is the first paragraph.&lt;/p&gt;</p><p>&lt;ul&gt;</p><p>&lt;li&gt;This is a list item.&lt;/li&gt;</p><p>&lt;/ul&gt;</p><p>&lt;div class=\"special\"&gt;</p><p>&lt;p&gt;This is the second paragraph.&lt;/p&gt;</p><p>&lt;p&gt;This is the third paragraph.&lt;/p&gt;</p><p>&lt;/div&gt;</p><p>&lt;div id=\"a\"&gt;</p><p>&lt;p&gt;This is the fourth paragraph.&lt;/p&gt;</p><p>&lt;input type=\"button\" value=\"Example Button\"&gt;</p><p>&lt;/div&gt;</p></code>",
					"Which of the following supports was not included in CSS 1?",
					"Which type of styling has 'overriding other CSS unintentionally' as a disadvantage?",
					"Which type of styling provides the quickest and easiest maintenance for styling many elements?"
]

// An array to hold arrays of the possible answer options. 
var choices = [
				[ "CSS 1", "CSS 2.1", "CSS 3", "CSS 4" ], 
				[ "#thisBox > ul", ".content", "#thisBox ul.special", "div" ],
				[ "True", "False" ],
				[ "selector { style-property : value; }", "{ selector ; style property ; value }", "selector { style-property ; value }",
				  "selector { value : style-property; }" ],
				[ "#main", "+main", ".main", "main"],
				[ "p ~ ul", "p + ul", "p - ul", "p * ul"],
				[ "External", "Inline", "Internal", "They are all equal specificity, just some styles are neater than others."],
				[ "Every paragraph", "The second and third paragraphs only", "The first paragraph only", "The first and fourth paragraphs only" ],
				[ "The fourth paragraph only", "The fourth paragraph and the button" ],
				[ "Every paragraph", "The second and third paragraphs only", "The first paragraph only", "The first and fourth paragraphs only" ],
				[ "Alignment of elements", "Media types", "Positioning of elements", "Line spacing"],
				[ "Inline", "Internal", "External" ],
				[ "Inline", "Internal", "External" ]

]

// An array to hold the correct answers to compare against the user's choices.
var answers = [
				"CSS 4", 
				"#thisBox ul.special", 
				"False", 
				"selector { style-property : value; }", 
				".main",
				"p ~ ul",
				"Inline",
				"The first paragraph only",
				"The fourth paragraph only",
				"Every paragraph",
				"Media types",
				"Inline",
				"External"
				

]


