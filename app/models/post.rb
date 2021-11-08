class Post
  include Mongoid::Document
  field :title, type: String
  field :detail, type: String
  field :genre, type: String
  field :duration, type: String

end
