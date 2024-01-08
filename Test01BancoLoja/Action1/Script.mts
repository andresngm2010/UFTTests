Browser("Banco de Loja > Home").Page("Banco de Loja > Home").Link("Simulador de Productos").Click @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Simuladores").Image("shutterstock_713443921").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebEdit("dnn$ctr806$View$txtAmount").Set "5000" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebEdit("dnn$ctr806$View$txtTime").Set "365" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebButton("Simular").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Banco de Loja > Home").Page("Banco de Loja > Herramientas").WebElement("$5362.67_2").Check CheckPoint("$5362.67_2") @@ script infofile_;_ZIP::ssf35.xml_;_
