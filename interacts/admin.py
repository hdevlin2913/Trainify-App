# from django.contrib import admin

from tpm.admin import my_admin_site
from .models import *

my_admin_site.register(Comment)
my_admin_site.register(Like)
