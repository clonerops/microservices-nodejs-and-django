from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    is_published = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    cretaed_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self) -> str:
        return self.title