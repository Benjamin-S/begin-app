@app
begin-app

@static

@http
get /api
get /posts
get /posts/:slug

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
