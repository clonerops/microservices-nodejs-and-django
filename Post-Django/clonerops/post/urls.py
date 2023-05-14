from django.urls import path
from .views import RetrivePosts, RetrivePostDetail, CreatePost

app_name = "post"
urlpatterns = [
    path("post", RetrivePosts.as_view(), name="list-of-posts"),
    path("post/<int:pk>", RetrivePostDetail.as_view(), name="post-detail"),
    path("post/create", CreatePost.as_view(), name="post-create")
]