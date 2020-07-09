Device("Device").App("AOS").Launch Restart

AIUtil.SetContext Device("Device")

AIUtil("hamburger_menu").Click

AIUtil("profile").Click
AIUtil("input", "USER NAME").Type "aidemo"
AIUtil("input", "PASSWORD").Type "AIdemo1"
AIUtil("button", "LOGIN").Click
wait 2

AIUtil("search").Search "17t"
If AIUtil("search").Exist(10) Then
	AIUtil("search").Click
End If

AIUtil.FindText("HP ENVY").Click
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil("hamburger_menu").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("YES").Click
 @@ hightlight id_;_197536_;_script infofile_;_ZIP::ssf2.xml_;_
