from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

# Create your models here.

class Note(models.Model):
    description = models.CharField(max_length=300)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="note" )


