from django.db import models

class Ash_model(models.Model):
    username = models.CharField(max_length=50, null=True)
    user_message = models.CharField(max_length=3000)
    Ash_message= models.CharField(max_length=6000)

    def __str__(self):
        return self.username  
