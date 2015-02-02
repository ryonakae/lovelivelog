###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :expanded
  config.line_comments = false
end

activate :relative_assets

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# Haml
set :haml, { ugly: true, format: :html5 }

# Slim
require 'slim'
set :slim, { :pretty => true, :sort_attrs => false, :format => :html5 }

# Autoprefixer
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  # config.cascade  = false
  # config.inline   = false
  # config.ignore   = ['hacks.css']
end

# Build-specific configuration
configure :build do
  # Use relative URLs
  activate :relative_assets

  # リポジトリ名を host に設定しておく
  # activate :asset_host, :host => "/lovelivelog"

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # activate :minify_html

  # Use relative URLs
  # activate :relative_assets
  # set :relative_links, true

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  # Remove Indent
  configure :build do
    activate :remove_indent
  end
end

# デプロイの設定
# 今回は gh-pages を使用するので branch に 'gh-pages' を設定する
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch = 'gh-pages'
end