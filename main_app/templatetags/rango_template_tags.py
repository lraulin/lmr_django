from django import template
from main_app.models import Category

register = template.Library()

@register.inclusion_tag('main_app/cats.html')
def get_category_list(cat=None):
    return {'cats': Category.objects.all(), 'act_cat': cat}