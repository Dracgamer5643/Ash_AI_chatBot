from django.shortcuts import render
from .models import Ash_model

def Ash(request):
    ash_data = Ash_model.objects.all()
    return render(request, "Home.html", {'ash_data':ash_data})