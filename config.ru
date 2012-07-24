require "rack/rewrite"
require "rack/contrib/response_headers"

use Rack::Rewrite do
  r301 "/", "http://droplings.com"
end

use Rack::ResponseHeaders do |headers|
  headers["Access-Control-Allow-Origin"] = "*"
end

use Rack::Deflater
use Rack::Static, :urls => [/./], :root => "assets", :index => "index.html"

run Proc
