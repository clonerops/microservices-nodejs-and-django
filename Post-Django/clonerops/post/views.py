from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from .models import Post
from .serializers import PostSerializer
# Create your views here.

class RetrivePostDetail(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    

class RetrivePosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreatePost(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
