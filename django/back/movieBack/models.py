from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=255)
    year = models.CharField(max_length=200)
    image= models.TextField(default='')
    description = models.TextField()
 
 
