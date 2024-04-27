from django.urls import re_path, path, include
from django.contrib import admin
from django.views.static import serve
from django.http import Http404
from django.conf import settings
import os

def index(request):
    index_path = os.path.join(settings.BASE_DIR, '../client/build/index.html')
    print("Trying to serve index.html from:", index_path)  # Print the path to help debugging
    if os.path.exists(index_path):
        return serve(request, os.path.basename(index_path), os.path.dirname(index_path))
    else:
        raise Http404('Index file not found')

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^$', index),
]