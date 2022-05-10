from .base import *

DEBUG = True

ALLOWED_HOSTS = ['portfoliochris.herokuapp.com']

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dcidmaru16uek7',
        'USER': 'ajqwzeifbboqwh',
        'PASSWORD': '2fecec8d91b8646fa4d060b89fff7621c7c9701b25846fb1d103f70a531a78ba',
        'HOST': 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
        'DATABASE_PORT': '5432',
    }
}

STATICFILES_DIRS = (BASE_DIR, 'static')