from django.shortcuts import render, redirect
from .forms import SigninForm
from django.contrib.auth import authenticate, login


def Signin(request):
    if request.method == 'POST':
        form = SigninForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            username = form.cleaned_data['password']
            username = form.cleaned_data['email']
            username = form.cleaned_data['first_name']
            username = form.cleaned_data['last_name']

            user = authenticate(request, username=username)

            if user is not None:
                login(request, user)
                return redirect('/')
            else:
                form.add_error(None, 'Invalid credentials')

    else:
        form = SigninForm()

    return render(request, "Signin.html", {'form': form})
