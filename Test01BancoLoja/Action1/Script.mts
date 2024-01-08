Browser("Banco de Loja > Home").Page("Banco de Loja > Home").Link("Simulador de Productos").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Simuladores").Image("shutterstock_713443921").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebEdit("dnn$ctr806$View$txtAmount").Set "5000" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebEdit("dnn$ctr806$View$txtTime").Set "365" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebButton("Simular").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebElement("dnn_ctr806_ModuleContent").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebElement("$5362.67").Check CheckPoint("$5362.67") @@ script infofile_;_ZIP::ssf9.xml_;_
