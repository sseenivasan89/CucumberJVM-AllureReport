$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Bing.feature");
formatter.feature({
  "name": "Feature - Bing Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bing"
    },
    {
      "name": "@search"
    },
    {
      "name": "@severity\u003dnormal"
    },
    {
      "name": "@issue\u003d1234"
    },
    {
      "name": "@tmsLink\u003d1234"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Scenario - Doing Bing Search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open bing page",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the bing page title",
  "keyword": "When "
});
formatter.step({
  "name": "I search the \"\u003ckeyword\u003e\" in bing step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Bing Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario - Doing Bing Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@bing"
    },
    {
      "name": "@search"
    },
    {
      "name": "@severity\u003dnormal"
    },
    {
      "name": "@issue\u003d1234"
    },
    {
      "name": "@tmsLink\u003d1234"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open bing page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Steps.i_open_bing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the bing page title",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Steps.i_check_for_the_bing_page_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search the \"Bing Search\" in bing step",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Steps.i_search_the_keyword_in_bing_step(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Google.feature");
formatter.feature({
  "name": "Feature - Google Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@search"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d6"
    },
    {
      "name": "@tmsLink\u003d45678"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Scenario - Doing Google Search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open google page",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the google page title",
  "keyword": "When "
});
formatter.step({
  "name": "I search the \"\u003ckeyword\u003e\" in google step",
  "keyword": "Then "
});
formatter.step({
  "name": "I skipping this step",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword"
      ]
    },
    {
      "cells": [
        "Google Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Scenario - Doing Google Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    },
    {
      "name": "@search"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d6"
    },
    {
      "name": "@tmsLink\u003d45678"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open google page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Steps.i_open_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the google page title",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.Steps.i_check_for_the_google_page_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search the \"Google Search\" in google step",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Steps.i_search_the_keyword_in_google_step(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My Title]\u003e but was:\u003c[Google Search - Google Search]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Steps.Steps.i_search_the_keyword_in_google_step(Steps.java:36)\r\n\tat ✽.I search the \"Google Search\" in google step(file:///E:/workspace/AllureCucumberJvm/src/test/java/Features/Google.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I skipping this step",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.Steps.i_skipping_this_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "Scenario_-_Doing_Google_Search");
formatter.after({
  "status": "passed"
});
});