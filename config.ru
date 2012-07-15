require "rack/rewrite"

use Rack::Rewrite do
  r301 "/", "http://droplings.com"
end

use Rack::Deflater
use Rack::Static, :urls => [/./], :root => "assets", :index => "index.html"

run Proc
