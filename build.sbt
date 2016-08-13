lazy val buildSettings = Seq(
  organization := "com.ithaca",
  scalaVersion := "2.11.8",
  name         := "photo-port"
)

lazy val jsSettings = Seq(
  JsEngineKeys.engineType := JsEngineKeys.EngineType.Node,
  BabelKeys.options       := WebJs.JS.Object(
    "presets" -> List("es2015", "react"),
    "plugins" -> List("transform-react-jsx")
  )
)

lazy val site = (project in file("site"))
  .enablePlugins(SbtWeb)
  .settings(
    jsSettings,
    buildSettings
)

lazy val root = (project in file(".")).aggregate(site)

