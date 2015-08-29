### twitter API key formatting as a service
--------------------------------------

![example magic](./json-example.gif)

Go to dev.twitter.com and copy the entire API keys page, 

come to [this page](http://coleww.github.io/tweet-key-formatter/) and paste it to the page,

get yr keys formatted just like how [twit](https://github.com/ttezel/twit) expects

```
JSON

{
  "consumer_key": "abagofspiders",
  "consumer_secret": "abucketofspiders",
  "access_token": "aballoonfilledwithspiders",
  "access_token_secret": "anamorphousmassofspiders"
}

YAML


consumer_key: ametrictonofspiders
consumer_secret: spidersinyourmouthdog!
access_token: 420smokespiderseveryday
access_token_secret: inrealityweallarejustfuturespiderfood
```

The app works by taking over [the paste event](http://www.colewillsea.com/blog/eating-glue-and-paste), so that rather than requiring an input field the user can just paste anywhere on the page to provide input data.
