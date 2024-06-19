AIUtil.SetContext Device("micclass:=Device")

AIUtil("input", "Email").Type "andresngm2010@gmail.com"
AIUtil("input", "Contraseña").Type "TeleVision1"
AIUtil("button", "INICIAR SESION CON GOOGLE").Click
AIUtil.FindTextBlock("Andres Gomez").Click
AIUtil.FindTextBlock("Comunidades").Click
AIUtil.FindTextBlock("Buscar").Click
AIUtil.FindTextBlock("Home").Click
AIUtil("dot_menu").Click
AIUtil.FindTextBlock("Cerrar Sesion").Click


