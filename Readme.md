# Coinkite wrapper for Meteor

Wrapper for Coinkite used for ... This is exclusively a server side package.

```
meteor add fullhdpixel:coinkite
```

## Requirements

1- Create a settings.json file in the root of your Meteor project.

```
meteor run --settings settings.json
```

2- In your settings.json file fill in the credentials for your Coinkite Account:

```
{
    "coinkite": {
        "apikey": "",
        "apisecret": ""
    }
}
```

## The following methods are supported
```javascript
Coinkite.();
``` 

## Deployment

Once you are ready to deploy your application, you could use Meteor Up. It has support for settings.json.

https://github.com/arunoda/meteor-up