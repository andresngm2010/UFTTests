'Browser("Tailwind CSS Table - Flowbite").Page("Tailwind CSS Table - Flowbite").Link("Checkbox selection").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("Tailwind CSS Table - Flowbite").Page("Tailwind CSS Table - Flowbite_2").Frame("Frame").WebElement("Microsoft Surface Pro").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Tailwind CSS Table - Flowbite").Page("Tailwind CSS Table - Flowbite_2").Frame("Frame").WebElement("Magic Mouse 2").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Tailwind CSS Table - Flowbite").Page("Tailwind CSS Table - Flowbite_2").Frame("Frame").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Tailwind CSS Table - Flowbite").Page("Tailwind CSS Table - Flowbite_2").Frame("Frame").WebCheckBox("WebCheckBox_2").Set "ON" @@ script infofile_;_ZIP::ssf5.xml_;_

'Browser("flowbite/content/components/ta").InsightObject("InsightObject").Click

DbTable("DbTable").Output CheckPoint("DbTable")

wait 10
DataTable("Output", dtGlobalSheet) = Right(DataTable("Output", dtGlobalSheet), 6)

MsgBox Mid(DataTable("Output", dtGlobalSheet), 1, 1)
MsgBox Mid(DataTable("Output", dtGlobalSheet), 2, 1)
MsgBox Mid(DataTable("Output", dtGlobalSheet), 3, 1)
MsgBox Mid(DataTable("Output", dtGlobalSheet), 4, 1)
MsgBox Mid(DataTable("Output", dtGlobalSheet), 5, 1)
MsgBox Mid(DataTable("Output", dtGlobalSheet), 6, 1)

wait(20)



'Public Function Mensajes(ByRef entrada, ByRef variable)
'       DataTable(variable, dtGlobalSheet) = InputBox("Ingrese "& entrada)
'End Function
'
'Dim entrada
'	entrada = "rol"
'Dim variable 
'	variable = "Output"
'
'Mensajes entrada, variable
'
'MsgBox "Validar"
'
'Reporter.AddRunInformation "test passed", "the test has already passed"
'Reporter.ReportHtmlEvent micFail, "step2", "the step 2 failed"
