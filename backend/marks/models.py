from django.db import models

# Create your models here.

class Marks(models.Model):
    marksId = models.AutoField(primary_key=True)
    studentId = models.CharField(max_length=100)
    Course = models.CharField(max_length=100)
    Marks = models.CharField(max_length=2)