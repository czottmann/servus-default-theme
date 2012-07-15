require "rack/rewrite"

use Rack::Rewrite do
  r301 "/", "http://droplings.com"
end

use Rack::Deflater
use Rack::Static, :urls => [/./], :root => "public", :index => "index.html"

run Proc
